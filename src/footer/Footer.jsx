function Footer() {
    return (
        <footer className="w-full bg-gray-800 text-white text-center py-8 bg-gradient-to-b from-gray-800 to-black" id="pointfootertp">
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Контакти</h3>
                <p>Email: example@example.com</p>
                <p>Телефон: <a>+380966383978</a></p>
            </div>
            <div>
                <a href="https://www.instagram.com/elf_smak/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Instagram
                </a>
            </div>
        </footer>
    );
}

export default Footer;