const CompFun = require('./comparator');
const fileInput = require('./fileInput');

function getConstructedGraph(students) {
    let graph = [];
    for (let i=0;i<students.length;i++){
        let jsonStr = {'name':students[i].name,'succ':[]};
        for (let j = 0 ;j<students.length;j++){
            let compValue = CompFun.compare(students[i],students[j]);
            switch (compValue) {
                case 1:
                    jsonStr.succ.push(students[j].name);
                    break;
                case 0:
                    break;
                default:
                    break;
            }
        }
        graph.push(jsonStr);
  //      console.log(jsonStr);
    }

    return graph;
}

module.exports = {
    getConstructedGraph : getConstructedGraph
};

//console.log(getConstructedGraph(fileInput.getStudentsFromFile('input.txt')));