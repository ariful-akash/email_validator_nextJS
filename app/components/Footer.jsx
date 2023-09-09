

const Footer = () => {
    const d = new Date();
    return (
        <div className="footer">
           <h4>Copyright &copy;{d.getFullYear()}</h4>
        </div>
    );
};

export default Footer;