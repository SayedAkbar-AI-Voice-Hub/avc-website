import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'real-estate')

export default function RealEstate() {
  return <ServicePageLayout config={config} />
}
