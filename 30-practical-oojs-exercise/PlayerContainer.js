console.log("in the player file")

class PlayerContainer {

  constructor(playerData, somethingElse) {
    this.player = playerData
    this.somethingElse = somethingElse

    // this.likePlayer = this.likePlayer.bind(this)
  }

  findChildElement(selector) {
    return this.element.querySelector(selector)
  }

  likePlayer = () => {

    console.log(this)

    this.player.likes++
    const likesPTag = this.findChildElement(".likes")
    likesPTag.textContent = `${this.player.likes} likes`

    // fetch
    const url = `${BASE_URL}/players/${this.player.id}`
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ likes: this.player.likes })
    }

    fetch(url, config)
  }

  render(parentElement) {
    this.element = document.createElement("div")

    this.element.className = "player"
    this.element.dataset.number = this.player.number

    this.element.innerHTML = `
      <h3>${this.player.name} (<em>${this.player.nickname}</em>)</h3>
      <img src="${this.player.photo}" alt="${this.player.name}">
      <p class="likes">${this.player.likes} likes</p>
      <button class="like-button">❤️</button>
    `

    const likeButton = this.findChildElement(".like-button")

    likeButton.addEventListener("click", this.likePlayer)

    parentElement.append(this.element)
  }

}
