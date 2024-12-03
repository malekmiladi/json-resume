function Footer() {

    const version = () => {
        const today = new Date();
        const isoDate = today.toISOString().split('T')[0];
        const parts = isoDate.split('-');
        parts[0] = parts[0].substring(2);
        return parts.join('');
    }

    return (
        <footer className="absolute bottom-0 right-1 h-fit w-fit text-xs">
            <p className="align-bottom">
                v{version()}
            </p>
        </footer>
    )

}

export default Footer;