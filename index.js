let _ = document
let $ = _.querySelector.bind(_)
let app = {
  _renderBase: '',
  shortname: '南高校刊',
  en_name: 'DACSC',
  modules: {
    '_': i => _(i),
    '$': i => $(i),
    'startTyping': () => {
      let typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 30,
        backSpeed: 15
      })
    }
  },
  year: new Date().getFullYear(),
  init: () => {
    app.menu.close()
    app.renderBase = ''
  },
  menu: {
    close: () => {
      $('#phonemenu').innerHTML = ''
      $('#icon').innerHTML = `<i class="fas fa-bars bar" aria-hidden="true" onclick="app.menu.open()"></i>`
      app.menu.isShow = false
    },
    open: () => {
      $('#phonemenu').innerHTML = app.menu.html
      $('#icon').innerHTML = `<i class="fas fa-times bar" aria-hidden="true" onclick="app.menu.close()"></i>`
      app.menu.isShow = true
    },
    showsub: id => {
      let html = ''
      let style = `text-align: right;
                   width: 100%;
                  `
      let j = 0
      app.menu.item[id].sub.forEach(i => {
        if (j === 0) {
          html += `<p>
                    <i class="fas fa-angle-left" style="text-align: left;margin-left: 0;width: 50%" aria-hidden="true" onclick="app.menu.open()"></i>
                    <a style="${style}" href="#${i.link}">${i.text}</a>
                  </p>`
          j = 1
        } else {
          html += `<p><a style="${style}" href="#${i.link}">${i.text}</a></p>`
        }
      })
      $('#phonemenu').innerHTML = html
    },
    isShow: false,
    html: ''
  },
  get title () {
    return this._title
  },
  set title (val) {
    _.title = val
    this._title = val
  },
  get renderBase () {
    return this._renderBase
  },
  set renderBase (val) {
    $('#page').innerHTML = val
  }
}

app.menu.item.forEach(i => {
  let drop = ''
  let morebutton = ''
  let isdrop = ''
  let itemHtml = ''
  if (i.sub !== undefined) {
    isdrop = `dropdown`
    let k = 1
    i.sub.forEach(j => {
      drop += `<p><a class="subitem" style="animation-delay: .${k}s" href="#${j.link}">${j.text}</a></p>`
      k++
    })
    morebutton = `<i class="fas fa-angle-right" aria-hidden="true" onclick="app.menu.showsub(${i.id})"></i>`
  }
  if (i.link !== null) {
    itemHtml = `<a href="#${i.link}">${i.text}</a>${morebutton}`
  } else {
    itemHtml = `${i.text}${morebutton}`
  }
  app.menu.html += `<p>${itemHtml}</p>`
  if (i.link === null) {
    i.link = ''
  }
  $('#menu').innerHTML += `<div class="title nonphone menu ${isdrop}"><a href="#${i.link}">${i.text}</a>
    <div style="margin-top: 1em;">${drop}</div>
  </div>`
})

$('#icon').innerHTML = `<i class="fas fa-bars bar" aria-hidden="true" onclick="app.menu.open()"></i>`
$('.phone').innerHTML = app.shortname
$('#footer').innerHTML = `© ${app.year} <b>${app.footer}</b>.`

let underDEV = () => {
  app.init()
  app.renderBase = `
    <div class="cover container mono">
      <div id="typed-strings"></div>
      <span id="typed"></span>
    </div>
  `
  $('#typed-strings').innerHTML = `<p>We are under<br><span class="color">Development</span>!</p>`
  app.modules.startTyping()
}

_.addEventListener('DOMContentLoaded', () => {
  pangu.autoSpacingPage()
})
