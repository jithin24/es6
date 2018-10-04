
const posts = [
        {title: "Post One", body: "Brazil win 2018 Fifa WC"},
        {title: "Post Two", body: "Belgium win 2018 Fifa WC"}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li> : ${post.body}`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

/**
 * Callback example
 */
function createPostWithCall(post, callback) {
    setTimeout(()=> {
        posts.push(post);
        callback();
    }, 3000);
}


/**
 *  Async Promise
 */
function createPostWithProm(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            posts.push(post);
            const error = false; 
            if(!error){
                resolve();
            }
            else{
                reject('Error! Something went wrong');
            }  
        }, 3000);
    });
}

/**
 * Await Async handling
 */
async function init(){
        await createPostWithProm({
            title: "Post Three", body: "Germany win 2018 Fifa WC"
        }); 
        console.log("Call to get Posts");
        getPosts();
    }

//createPostWithCall({title: "Post Three", body: "Germany win 2018 Fifa WC"}, getPosts);
//createPostWithProm({title: "Post Three", body: "Germany win 2018 Fifa WC"}).then(getPosts).catch(err => console.log(err));
init();