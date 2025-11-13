import ServiceCard from './components/ServiceCard';

// Масив даних для карток
const services = [
  {
    iconClass: '_icon-desing',
    title: 'Design',
    text: 'Our design team creates stunning, user-centric experiences.',
    hasButton: true
  },
  {
    iconClass: '_icon-engineering',
    title: 'Engineering',
    text: 'We build scalable digital solutions using the latest tech.',
    hasButton: true
  },
  {
    iconClass: '_icon-pm',
    title: 'Project Management',
    text: 'We ensure projects are delivered on time and within budget.',
    hasButton: true
  }
];

function App() {
  return (
    <section className="services">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  );
}

export default App;
