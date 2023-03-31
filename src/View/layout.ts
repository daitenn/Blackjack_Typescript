import Table from '../Controller/table'

export class View {
  public static startGame(): void {
    const root: HTMLElement | null = document.getElementById('root')
    const world = new Table('Hello World!!!!', 'blackjack')
  }

  public static startLoginLayout() {
    let div = document.createElement('div')
    div.innerHTML += `
      <div class="card bg-dark text-white">
        <img src="./assets/blackjack.png" class="card-img" alt="" />
        <div class="card-img-overlay">
          <h5 class="card-title fw-bolder">blackjack Game</h5>
          <div class="">
            <input type="text" placeholder="名前を入力" id="input-val" />
            <button class="btn btn-primary btn-root">ログイン</button>
          </div>
        </div>
      </div>
    `

    return document.getElementById('root')?.append(div)
  }
}

// const ele = document.getElementById('input-val') as HTMLInputElement
// console.log(ele.value)
