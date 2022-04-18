        var f = 1
        var c = 10
        var a = 0
        var b = 1
      
        
        for ( var i = 0 ; i<=c-1; i++){
            f = a + b
            a = b
            b = f
            
            console.log(f)
        }