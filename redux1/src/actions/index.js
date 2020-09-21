export function movieList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Death Race'},
            {id:2,name:'Avengers'},
            {id:3,name:'Jab We Mer'}
        ]
    }
}