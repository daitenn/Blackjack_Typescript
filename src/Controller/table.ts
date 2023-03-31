import { View } from '../View/layout'

export default class Table {
  // クラスで使うプロパティ
  private message: string
  // private userName: string
  private chips: number
  private gameType: string
  private betDenomination: number[]

  // コンストラクタ（初期化）
  constructor(message: string, gameType: string) {
    this.message = message
    this.chips = 400
    this.gameType = 'blackjack'
    this.betDenomination = [1, 5, 20, 50]
    View.startLoginLayout()
  }

  // 外部から呼び出せるメソッドを定義
  public sayHello(elem: HTMLElement | null) {
    if (elem) {
      elem.innerText = this.message
    }
  }
}
