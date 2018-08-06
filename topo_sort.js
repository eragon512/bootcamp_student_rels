const getgraph = require('./ConstructGraph');
const file_io = require('./fileInput');

function topological_sort_util(list_of_nodes, current_node, visited, stack,map) {
    visited[current_node.name] = true;

    let n  = current_node.succ.length;
    for(let j=0;j<n;j++){
        if(visited[current_node.succ[j]] === false){
            topological_sort_util(list_of_nodes, list_of_nodes[map[current_node.succ[j]]],visited, stack, map)
        }
    }
    stack.push(current_node.name);
}

function print_stack(stack) {
    let ans = "";
    while(stack.length){
        if(stack.length===1)
            ans+= stack.pop().toString() + " \n";
        else
            ans += stack.pop().toString() + " > ";
    }
    console.log(ans);
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

            topological_sort_util(list_of_nodes, list_of_nodes[map[outdegree[i].name]], visited, stack,map);
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