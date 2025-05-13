/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'

/**
 * 英雄大图区块
 */
export const Hero = props => {
    const config = props?.NOTION_CONFIG || CONFIG
    const pageCover = props?.siteInfo?.pageCover
    const bannerImage = siteConfig('PROXIO_HERO_BANNER_IMAGE', null, config) || pageCover
    const bannerIframe = siteConfig('PROXIO_HERO_BANNER_IFRAME_URL',null,config)
    return (
        <>
            {/* <!-- ====== Hero Section Start --> */}
            <div
                id='home'
                className='h-screen relative overflow-hidden bg-primary '>
                {/* 横幅图片 */}
                {!bannerIframe && bannerImage && (
                    <LazyImage
                        priority
                        className='w-full object-cover absolute h-screen left-0 top-0 pointer-events-none'
                        src={bannerImage} />
                )}
                <iframe src={bannerIframe} className='w-full absolute h-screen left-0 top-0 pointer-events-none' />
                {/* 阴影遮罩 */}
                <div className='h-1/3 w-full absolute left-0 bottom-0 z-10'>
                    <div className='h-full w-full absolute group-hover:opacity-100 transition-all duration-1000 
                    bg-gradient-to-b from-transparent to-white dark:to-black'/>
                </div>

            </div>
            {/* 文字标题等 */}
            <div className='w-full pb-15 dark:text-white'>
                <div className='container -mx-4 flex flex-wrap items-center'>
                    <div className='w-full px-4'>
                        <div
                            className='hero-content wow fadeInUp mx-auto max-w-[780px] text-center'
                            data-wow-delay='0.5s'>
                            {/* 主标题 */}
                            <h1 className='mb-6 text-3xl font-bold leading-snug sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]'>
                                {siteConfig('PROXIO_HERO_TITLE_1', null, config)}
                            </h1>
                            {/* 次标题 */}
                            <p className='mx-auto mb-9 max-w-[600px] text-base font-medium  sm:text-lg sm:leading-[1.44]'>
                                {siteConfig('PROXIO_HERO_TITLE_2', null, config)}
                            </p>

/* ====== 按钮组 ====== */
const buttons = Array.from({ length: 20 }, (_, i) => {
  const n = i + 1
  const text = siteConfig(`PROXIO_HERO_BUTTON_${n}_TEXT`, null, config)
  if (!text) return null                         // 没写 TEXT 就跳过
  return {
    text,
    url:  siteConfig(`PROXIO_HERO_BUTTON_${n}_URL`,  '#', config),
    icon: siteConfig(`PROXIO_HERO_BUTTON_${n}_ICON`, null, config),
    primary: n === 1                             // 第 1 个走白底样式
  }
}).filter(Boolean)                               // 去掉空位

/* 把这段放进原来的 <ul> 里 */
<ul className="mb-10 flex flex-wrap justify-center gap-5">
  {buttons.map((btn, idx) => (
    <li key={idx}>
      <Link
        href={btn.url}
        className={
          btn.primary
            ? 'inline-flex items-center rounded-2xl bg-white px-7 py-[14px] font-medium text-dark shadow-1 hover:bg-gray-2'
            : 'inline-flex items-center rounded-2xl border border-white px-7 py-[14px] font-medium text-white hover:bg-white hover:text-dark'
        }
      >
        {btn.icon && <img src={btn.icon} alt="" className="mr-2 h-5 w-5 inline-block" />}
        {btn.text}
      </Link>
    </li>
  ))}
</ul>

                                
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ====== Hero Section End --> */}
        </>
    )
}
