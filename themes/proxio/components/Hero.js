/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'

export const Hero = props => {
  // ① 先决定用哪个 config
  const config = props?.NOTION_CONFIG || CONFIG

  // ② 再从里面取按钮
  const buttons = config.HERO_BUTTONS || []

  const pageCover   = props?.siteInfo?.pageCover
  const bannerImage = siteConfig('PROXIO_HERO_BANNER_IMAGE', null, config) || pageCover
  const bannerIframe= siteConfig('PROXIO_HERO_BANNER_IFRAME_URL', null, config)

  return (
    <>
      {/* ====== Hero Section Start ====== */}
      <div id="home" className="h-screen relative overflow-hidden bg-primary">
        {/* 背景图 / Iframe —— 二选一渲染 */}
        {bannerIframe
          ? <iframe src={bannerIframe} className="w-full absolute h-screen left-0 top-0 pointer-events-none" />
          : bannerImage && (
              <LazyImage
                priority
                className="w-full object-cover absolute h-screen left-0 top-0 pointer-events-none"
                src={bannerImage}
              />
            )}

        {/* 底部渐变遮罩 */}
        <div className="h-1/3 w-full absolute left-0 bottom-0 z-10">
          <div className="h-full w-full absolute bg-gradient-to-b from-transparent to-white dark:to-black" />
        </div>
      </div>

      {/* 文案 + 按钮 */}
      <div className="w-full pb-15 dark:text-white">
        <div className="container -mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center" data-wow-delay="0.5s">
              {/* 主 & 次标题 */}
              <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                {siteConfig('PROXIO_HERO_TITLE_1', null, config)}
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium sm:text-lg">
                {siteConfig('PROXIO_HERO_TITLE_2', null, config)}
              </p>

              {/* 按钮组 */}
              <ul className="mb-10 flex flex-wrap justify-center gap-5">
                {buttons.map((btn, idx) => (
                  <li key={idx}>
                    <Link
                      href={btn.url}
                      className={
                        btn.variant === 'primary'
                          ? 'inline-flex items-center rounded-2xl bg-white px-7 py-[14px] font-medium text-dark shadow-1 hover:bg-gray-2'
                          : 'inline-flex items-center rounded-2xl border border-white px-7 py-[14px] font-medium text-white hover:bg-white hover:text-dark'
                      }
                    >
                      {btn.icon && (
                        <img src={btn.icon} alt="" className="mr-2 h-5 w-5 inline-block" />
                      )}
                      {btn.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ====== Hero Section End ====== */}
    </>
  )
}
