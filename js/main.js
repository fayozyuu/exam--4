let template = document.querySelector('.template').content;
let fragment = document.createDocumentFragment();
let list = document.querySelector('.list');

const render = (post) => {
    for(i=0; i<post.length; i++){
        let clone = template.cloneNode(true),
        postName = clone.querySelector('.name')
         postUser = clone.querySelector('.username'),
         postTitle = clone.querySelector('.title'),
         postBody = clone.querySelector('.body'),
         postPart1 = clone.querySelector('.part-1'),
         postComp1 = clone.querySelector('.component-1'),
         postPart2 = clone.querySelector('.part-2'),
         postComp2 = clone.querySelector('.component-2'),
         postPart3 = clone.querySelector('.part-3'),
         postComp3 = clone.querySelector('.component-3'),
         postPart4 = clone.querySelector('.part-4'),
         postComp4 = clone.querySelector('.component-4'),
         postPart5 = clone.querySelector('.part-5'),
         postComp5 = clone.querySelector('.component-5'),

        postName.src = post[i].user.name,
        postUser.textContent = "@" + post[i].user.username;
        postTitle.textContent = post[i].title;
        postBody.textContent = post[i].body;
        postPart1.textContent = post[i].comments[0].name;
        postComp1.textContent = post[i].comments[0].body;
        postPart2.textContent = post[i].comments[1].name;
        postComp2.textContent = post[i].comments[1].body;
        postPart3.textContent = post[i].comments[2].name;
        postComp3.textContent = post[i].comments[2].body;
        postPart4.textContent = post[i].comments[3].name;
        postComp4.textContent = post[i].comments[3].body;
        postPart5.textContent = post[i].comments[4].name;
        postComp5.textContent = post[i].comments[4].body;
    
        fragment.appendChild(clone);
        list.appendChild(fragment)
        
    }
    let btn = document.getElementsByClassName('button');
    let collapse = document.getElementsByClassName('element');
    
    for(j=0; j<10; j++){
        btn[j].href = `#collapseExample-${j}`;
        collapse[j].id = `collapseExample-${j}`;
    }
}
render(posts);

