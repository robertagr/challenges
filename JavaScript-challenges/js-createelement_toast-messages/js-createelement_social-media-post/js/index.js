console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");
document.body.append(newPost);

const newPostContent = document.createElement("p");
newPostContent.classList.add("post_content");
newPostContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPost.append(newPostContent);

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");
newPostContent.append(newFooter);

const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = "@username2";
newFooter.append(newSpan);

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = "♥ Like";
newButton.addEventListener("click", handleLikeButtonClick);
newFooter.append(newButton);
