import "../Footer.css"
const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 10px', textAlign: 'center' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <p><strong>Address:</strong> Thimphu,Bhutan</p>
                <p> <strong>Email:</strong>{' '}
                    <a href="mailto:kinleyrinzin961@gmail.com.com" style={{ color: '#fff', textDecoration: 'underline' }}>
                        kinleyrinzin961@gmail.com
                        </a></p>

                <p><strong>Contact:</strong> +97517278656</p>
                <p style={{ marginTop: '15px', fontSize: '0.9em' }}>
                    &copy; 2025 JWL
                </p>
            </div>
        </footer>
    );
};

export default Footer;
