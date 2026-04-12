import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'dental')

export default function Dental() {
  return <ServicePageLayout config={config} />
}
