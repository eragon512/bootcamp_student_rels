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

function topological_sort(list_of_nodes, size){

    var stack = [];
    var visited = {};
    var map = {};
    for(let i=0;i<size;i++) {
        map[list_of_nodes[i].name] = i;
        visited[list_of_nodes[i].name] = false;
    }

    for(let i=0;i<size;i++)
    {
        if(visited[list_of_nodes[i].name]===false) {

            topological_sort_util(list_of_nodes, list_of_nodes[i], visited, stack,map);
            print_stack(stack);
            stack = [];
        }
    }

}


function test(){

   let list_of_node = [
        {
            name: "A",
            succ: ['B','C']

        },
        {
            name: "B",
            succ: ['C']
        },
       {
           name: 'C',
           succ: []
       },
       {
           name: "D",
           succ: ["E"]
       },
       {
           name: "E",
           succ: []
       }
       ];
   topological_sort(list_of_node, list_of_node.length);
}


test();