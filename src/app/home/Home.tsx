import { Products } from './containers/Products';

export function Home() {
    return (
        <section className='flex flex-wrap justify-center px-6 pt-6 pb-10 mx-auto lg:max-w-7xl xl:justify-center gap-y-8 gap-x-5 lg:py-14'>
            <Products />
        </section>
    )
}