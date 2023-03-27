import './styles.scss'

const Location = () => (
    <section className='location'>
        <div className="container">
            <h2>Location</h2>

            <div className="location_company">
                <span className="company_name">Burger Factory</span>
                <span>Pl. de la Riponne 10</span>
                <span>1005 Lausanne</span>
                <span>021 800 00 00</span>
            </div>

            <div className="location_map">
                <iframe
                    title='Our_location'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.678576123934!2d6.6330401!3d46.524149699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e31ad9a7581%3A0x6910a4219da53f6!2zUGwuIGRlIGxhIFJpcG9ubmUgMTAsIDEwMDUgTGF1c2FubmUsINCo0LLQtdC50YbQsNGA0LjRjw!5e1!3m2!1sru!2sua!4v1679588916574!5m2!1sru!2sua"
                    width="100%" height="100%" style={{border: 0}} allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </section>
);
export default Location
