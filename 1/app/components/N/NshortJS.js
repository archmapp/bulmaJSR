import React from 'react'

function NshortJS() {

  function creM(__html) {
    return {
      __html: __html,
    }
  }

  function CC({ __html }) {
    return <div dangerouslySetInnerHTML={creM(__html)} />
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div>
            <div className="is-size-4 has-text-weight-medium">[shortJS.js]</div>
          </div>
          <div className="notification has-background-info-light is-bold mb-1">
            <div className="container">
              <h1 className="title is-3 has-text-info">
                shortBulma <span className="is-size-4">ライブラリ</span>
              </h1>
              <h2 className="subtitle is-5 has-text-white">
                <strong className="subtitle is-6 has-text-danger">
                  shortBulma$$.js
                </strong>
                ・
                <strong className="subtitle is-6 has-text-danger">
                  shortJS.js
                </strong>
              </h2>
            </div>
          </div>

          <div className="columns mt-5">
            <div className="column"></div>
            <div className="column is-8 content">
              <article className="message is-info">
                <div className="message-header">
                  <p className="has-text-centered has-text-weight-bold">
                    このサイト独自の Bulma用ライブラリです
                  </p>
                </div>
                <div
                  className="message-body has-background-white-bis"
                  style={{ borderBottom: 'inset 2px #aaaa88' }}
                >
                  <div className="ml-3 mb-6">
                    <li>
                      参考ページ：
                      <a
                        href="https://archmapp2.github.io/bulmaJS/src/sub/js/shortBulma.html"
                        className="has-tooltip-top has-tooltip-warning has-text-grey has-text-weight-bold is-size-5"
                        data-tooltip="[CTRL]キーを押しながら、クリック"
                      >
                        shortBulma ライブラリ
                      </a>
                      &nbsp;もご覧ください
                    </li>
                  </div>
                </div>
              </article>

              <div className="box">
                <div className="box">
                  <h2 className="is-size-4 has-background-white-ter p-2 km">
                    解説
                  </h2>
                  <div className="is-size-5-tablet lh7">
                    ~~ 自作ライブラリ <strong>shortJS.js</strong> ~~
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        BulmaでJavascriptを利用するために、このWebサイトでは
                        &nbsp;<strong>shortJS.js</strong>&nbsp;
                        というライブラリを使っています。
                        <article className="panel is-warning mt-5">
                          <p className="panel-heading mb-0">特徴</p>
                          <div className="panel-block">
                            <span className="panel-icon mb-5">
                              <i
                                className="fas fa-2x fa-mug-hot chestnut-light"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span className="ml-4">
                              BulmaでJavascriptを短い名前で利用します
                            </span>
                          </div>
                          <div className="panel-block">
                            <span className="panel-icon mb-5">
                              <i
                                className="fas fa-2x fa-mug-hot chestnut-light"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span className="ml-4">
                              これらのエイリアス（ショートカット名）はできるだけ少数に限定
                            </span>
                          </div>
                          <div className="panel-block">
                            <span className="panel-icon mb-5">
                              <i
                                className="fas fa-2x fa-mug-hot chestnut-light"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span className="ml-4">
                              Bulmaの特定の機能を実現する関数も追加
                            </span>
                          </div>
                          <div className="panel-block">
                            <span className="ml-6">
                              （ 例：$$.bulmaMenu、$$.bulmaTabs、$$.bulmaModal等
                              ）
                            </span>
                          </div>
                        </article>
                        <h3
                          className="
                          is-size-5
                          has-background-white-ter
                          mt-2
                          mb-1
                          px-2
                          py-1
                        "
                        >
                          使い方
                        </h3>
                        <div className="box has-background-warning-light mt-1">
                          <h4 className="is-size-6 has-background-white-ter px-2 py-1">
                            <strong
                              className="
                              subtitle
                              is-6
                              has-text-danger has-text-weight-bold
                            "
                            >
                              shortJS.js
                            </strong>
                          </h4>
                          <ul>
                            <li className="mb-2">
                              <span className="has-text-weight-bold">
                                module
                              </span>
                              として利用
                            </li>
                            <li>
                              設定の例：import * as $$ from './js/shortJS';
                            </li>
                            <li>但し、pathは状況によって変わります。</li>
                            <li>
                              <div>
                                このサイトでは、
                                <span className="has-text-weight-bold">
                                  webpack.config.js
                                </span>
                                内で
                                <CC
                                  __html={`new webpack.ProvidePlugin({<br />
  &nbsp;&nbsp;$$: path.resolve(path.join(__dirname, 'app/js/shortJS.js')),<br />
}),`}
                                ></CC>
                              </div>
                              として定義して、どのjsファイルからも$$を使えるようにしています。
                            </li>
                            <li>
                              <div className="mt-3">
                                <dl>
                                  <dt>$$.de(f)</dt>
                                  <dd>ロード時にイベントリスナーを設定</dd>
                                  <dt>$$.qAll('.notification .delete')</dt>
                                  <dd>各notificationの削除ボタンを全て取得</dd>
                                  <dt>$$.oe = (o, f)</dt>
                                  <dd>オブジェクトにイベントリスナーを設定</dd>
                                  <dt>$$.Id('n1')</dt>
                                  <dd>idが'n1'である要素を取得</dd>
                                </dl>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2
                className="
                subtitle
                has-text-danger has-background-white-ter
                mb-2
                pl-4
                p-2
              "
              >
                shortJS.js{' '}
                <span className="subtitle">のソースコード・抜粋</span>
              </h2>

              <blockquote className="is-size-6 ml-2">
                <div className="sourceview">
                  <pre id="pre1" className="brush: html;">
                    <CC
                      __html={`// shortJS.js

// ss: String, not selector
export const Id0 = (id) => {
  return document.getElementById(id)
}
export const Id = (id) => {
  id = id.substring(0, 1) === '#' ? id.substring(1) : id
  return document.getElementById(id)
}

// selector
export const q = (sel) => document.querySelector(sel)
export const qAll = (sel) => document.querySelectorAll(sel)
export const oq = (o, sel) => o.querySelector(sel)
export const oqAll = (o, sel) => o.querySelectorAll(sel)

export const de = (f) => {
  document.addEventListener('DOMContentLoaded', f)
}

export const oe = (o, f, evNa = 'click') => {
  o.addEventListener(evNa, f)
}

export const dqoe = (sel, f) => {
  de(() => qe(sel, f))
}

export const qecL = (sel, selT, cN = 'is-active', mN = 'toggle') => {
  qe(sel, (e) => {
    e.stopPropagation()
    qcL(sel, cN, mN)
    qcL(selT, cN, mN)
  })
}

export const qe = (sel, f, evNa = 'click') => {
  oe(q(sel), f, evNa)
}

export const doe = (o, f) => {
  de(() => oe(o, f))
}

export const qAe = (sel, f, evNa = 'click') => {
  qAll(sel).forEach((o) => oe(o, (e) => f(e), evNa))
  // qAll(sel).forEach((o) => oe(o, (e) => f(e), evNa))
}

export const qAe_ocL = (sel, selTrgt, evNa = 'click') => {
  qAll(sel).forEach((o) => {
    oe(o, () => ocL(q(selTrgt)), evNa)
  })
}

export const qAe_ocL_T = (sel, selTrgt, evNa = 'click') => {
  qAll(sel).forEach((o) => {
    oe(
      o,
      () => {
        ocL(q(selTrgt))
        setTimeout(() => ocL(q(selTrgt)), 500)
      },
      evNa
    )
  })
}

export const qcL = (sel, cN = 'is-active', mN = 'toggle') =>
  q(sel).classList[mN](cN)

export const qcL_T = (sel, cN = 'is-active', mN = 'toggle') => {
  q(sel).classList[mN](cN)
  setTimeout(() => q(sel).classList[mN](cN), 1000)
}

export const ocL = (o, cN = 'is-active', mN = 'toggle') => o.classList[mN](cN)

export const qcLm = (
  sel,
  { selT, cN = 'is-active' },
  mN = 'toggle',
  stopP = true
) => {
  ocLm(q(sel), { trgt: q(selT), cN }, mN, stopP)
}

export const ocLm = (
  o,
  { trgt, cN = 'is-active' },
  mN = 'toggle',
  stopP = true
) => {
  oe(o, (e) => {
    if (stopP) e.stopPropagation()
    trgt.classList[mN](cN)
  })
}

export const oAcLm = (
  o,
  { trgts, cN = 'is-active' }, // trgts: array
  mN = 'toggle',
  stopP = true
) => {
  oe(o, (e) => {
    if (stopP) e.stopPropagation()
    trgts.forEach((t) => t.classList[mN](cN))
  })
}


export const ogA = (o, ss) => o.getAttribute('data-' + ss)
export const ogD = (o, ss) => o.dataset[ss]
export const qogA = (sel, ss) => q(sel).getAttribute('data-' + ss)
export const qogD = (sel, ss) => q(sel).dataset[ss]

export const na = (ss) => document.getElementsByName(ss) // form radio

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const bulmaMenu = (ss, ssT) => {
  // $$de( () => {... この中で使う } )
  qecL(ss, ssT)
  qe('body', (e) => {
    // bodyをクリックしてメニューを消す
    e.stopPropagation()
    if (q(ss).classList.contains('is-active')) {
      qcL(ss)
      qcL(ssT)
    }
  })
}

export const bulmaMenu2 = (ss, ssT) => {
  // $$de( () => {... この中で使う } )
  qecL(ss, ssT)
  qe('body', (e) => {
    // bodyをクリックしてメニューを消す
    e.stopPropagation()
    if (q(ss).classList.contains('is-active')) {
      qcL(ss)
      qcL(ssT)
    }
  })
}

export const bulmaTabs = (ssTabs, ssContent) => {
  const tabs = qAll(ssTabs)
  const boxes = qAll(ssContent)

  tabs.forEach((tab) => {
    const target = Id(tab.dataset.target)

    oe(tab, () => {
      bulmaTab(tabs, tab)
      bulmaTabR(boxes, target, 'is-hidden')
    })
  })
}

// bulmaTabs('.tabs li', '#tab-content > div');

export const bulmaTab = (items, target, cN = 'is-active') => {
  items.forEach((item) => {
    if (item === target) {
      ocL(item, cN, 'add')
    } else {
      ocL(item, cN, 'remove')
    }
  })
}

export const bulmaTabR = (items, target, cN = 'is-active') => {
  items.forEach((item) => {
    if (item === target) {
      ocL(item, cN, 'remove')
    } else {
      ocL(item, cN, 'add')
    }
  })
}

export const bulmaModal = (sel, selB, selM) => {
  qcLm(sel, { selT: selM })
  qcLm(selB, { selT: selM })
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Bulmaとは直接関係ありません。
export const codeS = (id) => {
  const pre1 = Id(id)
  if (!pre1) return

  oe(pre1, () => {
    document
      .getSelection()
      .setBaseAndExtent(pre1, 0, pre1, pre1.childNodes.length)
    // console.log('pre1.childNodes.length', pre1.childNodes.length);
  })
}

export const codeSA = (sel) => {
  qAll(sel).forEach((pre1) => {
    oe(pre1, () => {
      document
        .getSelection()
        .setBaseAndExtent(pre1, 0, pre1, pre1.childNodes.length)
    })
  })
}
`}
                    ></CC>
                  </pre>
                </div>
              </blockquote>
              <div className="box">
                <h2 className="is-size-4 has-background-white-ter p-2 km">
                  解説
                </h2>
                <div className="is-size-5-tablet lh7">
                  ~~ Bulmaの ショートカットライブラリ ~~
                </div>
                <div className="content">
                  <ul>
                    <li>
                      BulmaでJavascriptを利用するとき、このWebサイトでは
                      <strong>shortJS.js</strong> というライブラリを使います。
                    </li>

                    <li className="pt-2">
                      以下に、いくつかの例を解説をしますが、基本的には標準のJavascriptの
                      <strong>ショートカット</strong>です。
                    </li>
                    <hr />
                    <li className="pt-2">
                      <dl>
                        <dt>$$.Id0(id)、$$.Id(id)</dt>
                        <dd className="py-2">
                          idを持つ最初の要素を取得します。
                          <br />
                          $$.Id(id)は、idに#が付いていても構いません。
                        </dd>
                        <dt>$$.q(sel)</dt>
                        <dd className="py-2">
                          セレクターselを持つ最初の要素を取得します。
                        </dd>
                        <dt>$$.qAll(sel)</dt>
                        <dd className="py-2">
                          セレクターselを持つ全ての要素を取得します。
                        </dd>
                        <dt>$$.oq(o, sel)</dt>
                        <dd className="py-2">
                          要素oの中で、セレクターselを持つ最初の要素を取得します。
                        </dd>
                        <dt>$$.de(f)</dt>
                        <dd className="py-2">
                          ページがロードされた時点で、イベントリスナーfを設定します。
                        </dd>
                        <dt>$$.oe(sel, f, evNa = 'click')</dt>
                        <dd className="py-2">
                          要素oがクリックされたとき、イベントリスナーfを設定します。
                          <br />
                          'click'イベントがデフォルトです。
                        </dd>
                        <dt>$$.qAe(sel, f)</dt>
                        <dd className="py-2">
                          セレクター'sel'を持つ全ての要素を取得し、それぞれにイベントリスナーfを設定する。
                        </dd>
                        <dt>$$.ocLm(o, %#123 trgt: target &#125, 'remove');</dt>
                        <dd className="py-2">
                          oをクリックすると
                          <br />
                          　「要素targetのクラスリストから'is-active'クラスを削除する」
                          <br />
                          というイベントリスナーを設定
                          <br />
                          （'is-active'、'toggle'がデフォルト）
                        </dd>
                        <dt>$$.bulmaMenu('#burger', '#nav-links');</dt>
                        <dd className="py-2">
                          狭い画面で表示されるBulmaのburgerメニューのコントロール
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NshortJS
