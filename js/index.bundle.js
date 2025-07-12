!(function () {
  var e = {
      815: function () {
        (() => {
          const e = document.querySelector('.about__more'),
            t = document.querySelector('.about-company'),
            o = document.querySelector('.about-advantages');
          e.addEventListener('click', () => {
            t.classList.toggle('about-company--active'),
              o.classList.toggle('about-advantages--active'),
              t.classList.contains('about-company--active')
                ? (e.innerText = 'Скрыть')
                : (e.innerText = 'Читать полностью');
          });
        })();
      },
      322: function () {
        (() => {
          const e = document.querySelectorAll('.item--hide'),
            t = document.querySelector('.catalog__more');
          t.addEventListener('click', () => {
            e.forEach((e) => {
              e.classList.toggle('item--hide'),
                e.classList.contains('item--hide') ? (t.innerText = 'Больше') : (t.innerText = 'Скрыть');
            });
          });
        })();
      },
      446: function () {
        (() => {
          const e = document.querySelectorAll('.footer-top__button'),
            t = document.querySelectorAll('.footer-top__list'),
            o = document.querySelectorAll('.footer-top__arr');
          e.forEach((r) => {
            r.addEventListener('click', (r) => {
              const a = r.currentTarget,
                c = a.dataset.drop,
                n = document.querySelector(`#${c}`),
                s = a.querySelector('.footer-top__arr'),
                i = a.classList.contains('footer-top__button--active');
              e.forEach((e) => e.classList.remove('footer-top__button--active')),
                t.forEach((e) => e.classList.remove('footer-top__list--active')),
                o.forEach((e) => e.classList.remove('footer-top__arr--active')),
                i ||
                  (a.classList.add('footer-top__button--active'),
                  n.classList.add('footer-top__list--active'),
                  s && s.classList.add('footer-top__arr--active'));
            });
          });
        })();
      },
      175: function () {
        (() => {
          const e = document.body,
            t = document.querySelector('.mid-header__burger'),
            o = document.querySelector('.header__tabs');
          t.addEventListener('click', () => {
            o.classList.toggle('header__tabs--active'),
              t.classList.toggle('mid-header__burger--active'),
              e.classList.toggle('no-scroll');
          });
        })();
      },
      429: function () {
        (() => {
          const e = document.querySelector('.header');
          window.addEventListener('scroll', () => {
            window.scrollY > 800 ? e.classList.add('header--active') : e.classList.remove('header--active');
          });
        })();
      },
      822: function () {
        new Swiper('.hero__slider', {
          direction:"horizontal",
          loop: true,
          allowTouchMove: false,
          touchMoveStopPropagation: true,
          touchStartPreventDefault: false,
          simulateTouch: false,
          autoplay: { delay: 2000 },
          pagination: { el: '.swiper-pagination' },

          // ✅ добавлено:
          touchReleaseOnEdges: true,
          passiveListeners: false,
        });
      },

      523: function () {
        (() => {
          const e = document.querySelectorAll('.tabs-bodyItem__title'),
            t = document.querySelectorAll('.tabs-bodyItem__dropDown'),
            o = document.querySelectorAll('.tabs-bodyItem__arrow');
          e.forEach((r) => {
            r.addEventListener('click', (r) => {
              const a = r.currentTarget,
                c = a.dataset.button,
                n = document.querySelector(`#${c}`),
                s = a.classList.contains('tabs-bodyItem__title--active'),
                i = a.querySelector('.tabs-bodyItem__arrow');
              e.forEach((e) => e.classList.remove('tabs-bodyItem__title--active')),
                t.forEach((e) => e.classList.remove('tabs-bodyItem--active')),
                o.forEach((e) => e.classList.remove('tabs-bodyItem__arrow--active')),
                s ||
                  (a.classList.add('tabs-bodyItem__title--active'),
                  n.classList.add('tabs-bodyItem--active'),
                  i.classList.add('tabs-bodyItem__arrow--active'));
            });
          });
        })();
      },
    },
    t = {};
  function o(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var c = (t[r] = { exports: {} });
    return e[r](c, c.exports, o), c.exports;
  }
  !(function () {
    'use strict';
    o(446),
      o(175),
      o(822),
      o(523),
      o(429),
      o(322),
      o(815),
      (function (e = 'max') {
        const t = '_dynamic_adapt_',
          o = 'data-da',
          r = (function () {
            const t = [];
            return (
              [...document.querySelectorAll(`[${o}]`)].forEach((e) => {
                const r = e.getAttribute(o),
                  [a, c, n] = r.split(',').map((e) => e.trim()),
                  s = document.querySelector(a);
                var i;
                s &&
                  t.push({
                    parent: e.parentElement,
                    element: e,
                    to: s,
                    breakpoint: c ?? '767',
                    order: void 0 !== n ? ((i = n), isNaN(i) ? n : Number(n)) : 'last',
                    index: -1,
                  });
              }),
              (function (t) {
                const o = 'min' === e ? 1 : 0;
                return [...t].sort((e, t) =>
                  e.breakpoint === t.breakpoint
                    ? e.order === t.order
                      ? 0
                      : 'first' === e.order || 'last' === t.order
                      ? -1 * o
                      : 'last' === e.order || 'first' === t.order
                      ? 1 * o
                      : 0
                    : (e.breakpoint - t.breakpoint) * o
                );
              })(t)
            );
          })();
        [...new Set(r.map(({ breakpoint: t }) => `(${e}-width: ${t}px),${t}`))]
          .map((e) => {
            const [t, o] = e.split(',');
            return { query: t, breakpoint: o };
          })
          .forEach((e) => {
            const o = window.matchMedia(e.query),
              a = (function (e, o) {
                return function () {
                  e.matches
                    ? (o.forEach((e) => {
                        !(function (e) {
                          const { to: o, element: r, order: a } = e;
                          (e.index = (function (e, t) {
                            return [...t.children].indexOf(e);
                          })(e.element, e.element.parentElement)),
                            r.classList.add(t),
                            'last' === a || a >= o.children.length
                              ? o.append(r)
                              : 'first' !== a
                              ? o.children[a].before(r)
                              : o.prepend(r);
                        })(e);
                      }),
                      o.reverse())
                    : (o.forEach((e) => {
                        e.element.classList.contains(t) &&
                          (function (e) {
                            const { parent: o, element: r, index: a } = e;
                            r.classList.remove(t), a >= 0 && o.children[a] ? o.children[a].before(r) : o.append(r);
                          })(e);
                      }),
                      o.reverse());
                };
              })(
                o,
                r.filter(({ breakpoint: t }) => t === e.breakpoint)
              );
            o.addEventListener('change', a), a();
          });
      })();
  })();
})();
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  setTimeout(() => {
    mask.remove();
  }, 600);
});
new WOW().init();
