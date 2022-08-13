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

        const logs = await Log.find({...filterRangeDate});
        let targets = logs.map(x => x.target);
        targets = [... new Set(targets)];

        if (filteredPages && filteredPages.length > 0) {
            targets = targets.filter(x => filteredPages.includes(x));
        }
        
        let labels = [];
        let datasets = [];
        
        const numberOfDay = (end - start) / (3600 * 24 * 1000 );
        
        for (let targetItem = 0; targetItem < targets.length; targetItem++) {

            const targetpage = targets[targetItem];
            const filterTarget = { target: targetpage };

            const data = [];
            const backgroundColor = [];
            const borderColor = [];
            const borderWidth = 1;
            const label = targetpage;
            const randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

            datasets.push({label, data, backgroundColor, borderColor, borderWidth})
            
            const copyStart = new Date(start);
            copyStart.setUTCHours(0);
            const dayNext = new Date(copyStart);
            
            for (let incr = 0; incr < Math.ceil(numberOfDay); incr++) {
                dayNext.setUTCDate(dayNext.getUTCDate()+1);

                const filterDate = {
                    $and: [
                        {createdAt: { $gte: copyStart }},
                        {createdAt: { $lte: dayNext }}
                    ]
                };
                try {
                    const result = logs.map(x => {
                        if (
                            x.target === filterTarget.target
                            && x.createdAt >= copyStart
                            && x.createdAt <= dayNext
                        ) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }).reduce((prev, current) => prev + current);
                    
                    data.push(Number(result));
                    backgroundColor.push(randomColor);
                    borderColor.push(randomColor);

                    // use for x axis labels
                    if (targetItem === 0) {
                        labels.push(copyStart.toISOString().substring(0,10));
                    }
                } catch (error) {
                    return {
                        status: 500,
                        body: {message: 'error calculating statistics: ' + error}
                    }
                }
                copyStart.setUTCDate(copyStart.getUTCDate() + 1);
            }
        }
        
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