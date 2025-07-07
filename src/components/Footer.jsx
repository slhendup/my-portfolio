
const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <p><strong>Address:</strong> Bathbala,Bumthang</p>
                   <p> <strong>Email:</strong>{' '}
                    <a href="mailto:KinleyRinzin@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>
                        KinleyRinzin@gmail.com
                    </a></p>
                
                <p><strong>Contact:</strong> 1234565</p>
                <p style={{ marginTop: '15px', fontSize: '0.9em' }}>
                    &copy; 2025 JWL
                </p>
            </div>
        </footer>
    );
};

export default Footer;
