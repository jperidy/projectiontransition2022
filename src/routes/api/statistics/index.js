    import Log from "../../../database/models/logModel";

    const getWhere = (start, end) => {
        if (start && end) {
            return {
                $and: [
                    { createdAt: { $gte: start } },
                    { createdAt: { $lte: end } },
                ]
            }
        }
        if (start) {
            return { createdAt: { $gte: start } }
        }
        if (end) {
            return { createdAt: { $lte: end } }
        }
        return {}
    }

    export async function GET({ url }) {

        const today = new Date(Date.now() + 1*1000*3600*24);
        const lastWeek = new Date(Date.now() - 7*1000*3600*24);
        
        let start = url.searchParams.get('start') ? new Date(url.searchParams.get('start').substring(0,10)) : null;
        let end = url.searchParams.get('end') ? new Date(url.searchParams.get('end').substring(0,10)) : null;

        const filteredPages = url.searchParams.get('pages') ? url.searchParams.get('pages').split('-SEP-') : null;
        
        if (!start) start = lastWeek;
        if (!end) end = today;

        const filterRangeDate = {
            $and: [
                {createdAt: { $gte: start }},
                {createdAt: { $lte: end }}
            ]
        };

        const logs = await Log.aggregate([
            { $match: {...filterRangeDate} },
            { $project: {
                createdAt: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                target: 1,
            }},
            { $group: {
                _id: {createdAt: "$createdAt", target: "$target"} ,
                sum: { $sum: 1}
            }},
            { $project: 
                { _id: 0, target: "$_id.target", createdAt: "$_id.createdAt", sum: 1}
            }
        ]).sort({'target': 1});        

        let targets = logs.map(x => x.target);
        targets = [... new Set(targets)];

        if (filteredPages && filteredPages.length > 0) {
            targets = targets.filter(x => filteredPages.includes(x));
        }
            
        let labels = [];
        let datasets = [];
            
        const numberOfDay = (end - start) / (3600 * 24 * 1000 );
        
        targets.forEach((targetpage, index) => {
            const filterTarget = { target: targetpage };
            
            const copyStart = new Date(start);
            copyStart.setUTCHours(0);
            const dayNext = new Date(copyStart);
            
            const data = [];
            const backgroundColor = [];
            const borderColor = [];
            const randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

            for (let incr = 0; incr < Math.ceil(numberOfDay); incr++) {
                const currentDay = copyStart.toISOString().substring(0,10);
                copyStart.setUTCDate(copyStart.getUTCDate() + 1);
                const result = logs.filter((log) => log.createdAt === currentDay && log.target === targetpage);
                if (result && result.length > 0) {
                    data.push(result[0].sum);
                } else {
                    data.push(0);
                }
                backgroundColor.push(randomColor);
                borderColor.push(randomColor);
                if (index === 0) {
                    labels.push(copyStart.toISOString().substring(0,10));
                }
            }
            
            const borderWidth = 1;
            const label = targetpage;
            

            datasets.push({label, data, backgroundColor, borderColor, borderWidth})
        });
            
        return {
            status: 200,
            body: {
                message: 'get statistics',
                type: url.searchParams.get('type') ? url.searchParams.get('type') : 'all',
                target: url.searchParams.get('target') ? url.searchParams.get('target') : 'all',
                start: start, //req.query.start,
                end: end, //req.query.end,
                data: { labels, datasets },
            }
        }
    };