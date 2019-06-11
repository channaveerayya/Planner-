const initState={
    projects:[
        {id:'1',title:'help me to crack the code',content:'blah blah blah blah blah blah blah'},
        {id:'2',title:'solve the problem..?',content:'blah blah blah blah blah blah blah'},
        {id:'3',title:'hunt it like a leopard',content:'blah blah blah blah blah blah blah'},
        {id:'4',title:'why so serious ... wow.....! ',content:'blah blah blah blah blah blah blah'}
    ]
}

const projectReducer = (state=initState,action) => {
    switch(action.type){

        case 'CREATE_PROJECT':
                console.log(action)
                return state;
            
        case 'CREATE_PROJECT_ERROR':
                console.log(action.err)
                return state;
        default :
                return state
    }
    
}

export default projectReducer
