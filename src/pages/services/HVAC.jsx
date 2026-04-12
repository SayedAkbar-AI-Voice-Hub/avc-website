import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'hvac')

export default function HVAC() {
  return <ServicePageLayout config={config} />
}
