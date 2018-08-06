const getgraph = require('./ConstructGraph');
const file_io = require('./fileInput');

function topological_sort_util(list_of_nodes, current_node, visited, stack,map,level) {
    visited[current_node.name] = true;
    let pr = level;
    let n  = current_node.succ.length;
    for(let j=0;j<n;j++){
        if(visited[current_node.succ[j]] === false){
            topological_sort_util(list_of_nodes, list_of_nodes[map[current_node.succ[j]]],visited, stack, map,level+1)
        }
    }
    stack.push({name: current_node.name, level: pr});
}

function print_stack(stack) {
    let ans = "";
    let topology = {};
    while(stack.length){
        tmp = stack.pop();
        if(topology[tmp.level.toString()])
            topology[tmp.level.toString()].push(tmp.name.toString()) ;
        else
        {
            topology[tmp.level.toString()] = [];
            topology[tmp.level.toString()].push(tmp.name.toString()) ;
        }


    }
    res = "";
    // console.log(Object.keys(topology).length);
    for(let x in topology) {
        if(topology.hasOwnProperty(x)) {
            if (x === '0')
                res+=('\n');
            if(parseInt(x) === Object.keys(topology).length -1 )
                res += topology[x];
            else
                res += topology[x] + "\n|\n";
        }
    }
    console.log(res);
}

function compare(a,b) {
    if (a.no < b.no)
        return 1;
    return 0;
}

function topological_sort(list_of_nodes, size, outdegree){

    var stack = [];
    outdegree.sort(compare);
    var visited = {};
    var map = {};
    // console.log(outdegree);
    for(let i=0;i<size;i++) {
        map[list_of_nodes[i].name] = i;
        visited[list_of_nodes[i].name] = false;
    }

    for(let i=0;i<size;i++)
    {
        if(visited[outdegree[i].name]===false) {

            topological_sort_util(list_of_nodes, list_of_nodes[map[outdegree[i].name]], visited, stack,map,0);
            print_stack(stack);
            stack = [];
        }
    }

}


function test(){

   var file_content = file_io.getStudentsFromFile('input.txt');
   list_of_node = getgraph.getConstructedGraph(file_content);
   // console.log(list_of_node);
    var outdegree = [];
    for (let i=0; i<list_of_node.length; i++)
    {
        outdegree[i] = {no: list_of_node[i].succ.length, name: list_of_node[i].name};
    }
   topological_sort(list_of_node, list_of_node.length,outdegree);
}


test();