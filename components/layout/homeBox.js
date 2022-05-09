function HomeBox({ name, title, page }) {
    return (
        <div className="bg-bgblack text-white pt-80 pb-30 md:pt-100 md:pb-35px lg:pt-120 lg:pb-40">
            <div className="container">
                <p className="text-homeBoxName md:text-mdHomeBoxName lg:text-lgHomeBoxName mb-10 text-white wolkway">{name}</p>
                <p className="max-w-90% md:max-w-50% lg:max-w-35% font-light text-white mb-24 md:mb-10 text-sm md:text-base">{title}</p>
                <p className="text-HomeBoxPageName md:text-mdHomeBoxPageName lg:text-lgHomeBoxPageName text-right uppercase text-placeholderColor hidden md:block wolkway">{page}</p>
            </div>
        </div>
    );
}

export default HomeBox;