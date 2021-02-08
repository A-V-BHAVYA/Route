function route() {

    if((parseInt(document.getElementById("input1").value)>=1 && parseInt(document.getElementById("input1").value)<=9) && (parseInt(document.getElementById("input2").value)>=1 && parseInt(document.getElementById("input2").value)<=9) ){
      //document.getElementById("res").value = (parseInt(document.getElementById("input1").value)); 
      function initialise(V,graph){
        for(var i=0;i<V;i++){
            var data=[];
            var d=[];
            for(var j=0;j<V;j++){
                data.push(graph[i][j]);
                if(graph[i][j]==1000)
                    d.push(-1);
                else
                    d.push(j)
            }
            dis.push(data);
            Next.push(d);
        }
    }
    
    function constructPath(u,v){
        
        if(Next[u][v] == -1){
            return null;
        }
        var path=[];
        path.push(u);
        while(u !=v){
            u=Next[u][v];
            path.push(u);
        }
        return path;
    }
    
    function floydWarshall(V){
        for(var k=0;k<V;k++){
            for(var i=0;i<V;i++){
                for(var j=0;j<V;j++){
                    if(dis[i][k] == 1000 || dis[k][j]==1000)
                        continue;
                    if(dis[i][j]>dis[i][k]+dis[k][j]){
                        dis[i][j]=dis[i][k]+dis[k][j];
                        Next[i][j]=Next[i][k];
                    }
                }
            }
        }
    }
    
    function printPath(path){
        var n=path.length;
        for(var i=0;i<n-1;i++){
            res.push((path[i])+1);
            res.push("->");
        }
        res.push((path[n-1])+1);
        res.push("\n");
        document.getElementById("res").value = (res.join("")); 
    }
    
    var dis=[];
    var res=[];
    var V=9;
    var Next=[];
    // var graph=[
    //     [0,3,1000,7],
    //     [8,0,2,1000],
    //     [5,1000,0,1],
    //     [2,1000,1000,0]
    //     ];

    var graph=[
      [0,8,3,1000,1000,13,1000,1000,1000],
      [1000,0,2,1,1000,1000,1000,1000,1000],
      [1000,3,0,9,2,1000,1000,1000,1000],
      [1000,1000,1000,0,4,1000,6,2,1000],
      [5,1000,1000,6,0,5,1000,1000,4],
      [1000,1000,1000,1000,1000,0,1,1000,7],
      [1000,1000,1000,1000,3,1000,0,4,1000],
      [1000,1000,1000,1000,1000,1000,1000,0,1],
      [1000,1000,1000,1000,1000,1000,5,1000,0]
    ];
     
    initialise(V,graph);
    floydWarshall(V);
    var path=[];
    
    path=constructPath((parseInt(document.getElementById("input1").value))-1,(parseInt(document.getElementById("input2").value))-1);
    printPath(path);
    document.getElementById("cost").value = dis[(parseInt(document.getElementById("input1").value))-1][(parseInt(document.getElementById("input2").value))-1]; 
    }
    else{
      document.getElementById("res").value = ""; 
      document.getElementById("cost").value = ""; 
      alert("Please give a valid input (from 1 to 9) !!!");
    }
}