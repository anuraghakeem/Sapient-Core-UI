var myPost = [{ text: "", time: "" }]

function createPost() {
    var postContent = document.getElementById("myPost");
    var postContainer = document.getElementById("postContainer");
    postContainer.innerHTML = "";
    myPost.push({ text: posteContent.value, time: new Date() });

    for (var i = myPost.length-1; i >= 0; i--) {

        var myCard = `<div class="card">
                    <div class="card-body">
                        ${myPost[i].text} ${myPost[i].time}
                    </div>
                    </div>`;
        postContainer.innerHTML += myCard;
    }
    postContent.value = "";
}