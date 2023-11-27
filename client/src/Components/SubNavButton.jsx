const SubNavButton = ({ label, icon }) => {
    return (
        <div className="flex flex-row">
            <button className="flex flex-row font-light my-auto hover:bg-black px-3 py-3 rounded-sm" style={{ color: '#feca30' }}>
                {icon && <i className={icon}/>}
                {label}
            </button>
            <div className="my-2 rounded-xl bg-black shadow-md" style={{ width: '0.1vw' }}/>
        </div>
    )
}

export default SubNavButton
