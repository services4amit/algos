function compare(a, b) {
    const bandA = a.size;
    const bandB = b.size;

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison * -1;
}


let uft = [{ treatment: 'TR0001', score: 12 }, { treatment: 'TR0002', score: 12 }, { treatment: 'TR0003', score: 12 },
{ treatment: 'TR0001', score: 12 }];


function check() {
    // let db = [{ treatment: 'TR0008', score: 9 }, { treatment: 'TR0003', score: 10 },
    //     { treatment: 'TR0004', score: 10 }, { treatment: 'TR0005', score: 10 }, { treatment: 'TR0006', score: 10 }
    //     , { treatment: 'TR0007', score: 10 }, { treatment: 'TR0002', score: 11 }, { treatment: 'TR0001', score: 12 }];

    // let db = [{ treatment: 'TR0008', score: 9 },{ treatment: 'TR0004', score: 10 }, { treatment: 'TR0005', score: 10 }, 
    // { treatment: 'TR0006', score: 10 }
    // , { treatment: 'TR0007', score: 10 },{ treatment: 'TR0001', score: 12 }, { treatment: 'TR0002', score: 12 },
    //  { treatment: 'TR0003', score: 12 },
    // ];

    let db = [{ treatment: 'TR0008', score: 9 }, { treatment: 'TR0003', score: 10 },
    { treatment: 'TR0006', score: 10 }, { treatment: 'TR0001', score: 12 }, { treatment: 'TR0002', score: 12 },
    { treatment: 'TR0004', score: 12 }, { treatment: 'TR0005', score: 30 }];

    // let db = [{ treatment: 'TR0001', score: 12 }, { treatment: 'TR0002', score: 12 }, { treatment: 'TR0003', score: 12 },
    // { treatment: 'TR0004', score: 12 }, { treatment: 'TR0005', score: 12 }, { treatment: 'TR0006', score: 12 }
    //     , { treatment: 'TR0007', score: 12 }, { treatment: 'TR0008', score: 12 }];



    let result = [];
    let temp = [];
    let i;
    for (let i = 0; i < db.length; i++) {
        // console.log("if", temp.length == 0)
        if (temp.length == 0) {
            if (temp.length == 0 && i == 4) {
                temp.push(db[i]);
                result.push(temp);
                break;
            } else {
                temp.push(db[i]);
            }

        } else {
            if (temp[temp.length - 1].score === db[i].score) {
                temp.push(db[i]);
            } else {
                result.push(temp);
                temp = []
                temp.push(db[i]);
            }

        }


        if (i == db.length - 1 && temp.length !== 0) {
            result.push(temp);
        }
    }

    

    console.log("result ", result)

}

// check();

let a = [
    [{ treatment: 'TR0008', score: 9 }],
    [
        { treatment: 'TR0003', score: 10 },
        { treatment: 'TR0006', score: 10 }
    ],
    [
        { treatment: 'TR0001', score: 12 },
        { treatment: 'TR0002', score: 12 },
        { treatment: 'TR0004', score: 12 }
    ],
    [{ treatment: 'TR0005', score: 30 }]
]

function giveMe5(arr) {
    let results = [];
    let temp = []
    for (let i = 0; i < arr.length; i++) {

        temp = [];
        arr[i].map((data) => {
            temp.push(data.treatment)
        })
        for(let k=0;k<arr[i].length;k++){
            results.push(temp)
        }
        
    }

    console.log(results)

}
giveMe5(a);