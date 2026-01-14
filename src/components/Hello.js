import React from 'react';

const Hello = () => {
    // return (
    //     <div className="dummyclass">
    //         <h1>Hey adwaya</h1>
    //     </div>
    // )

    return React.createElement(
        'div', //html tag
        {id: "hello", className: "dummyclass"}, //optional properties, obj of key val pair that will be applied to the element
        //in JS 'class' is a reserved word, we use class keyword to create react components, so in react a css class has to be specified using className attribute
        React.createElement('h1', null, 'hello adwaya') //children for div tag
    )
}

export default Hello;