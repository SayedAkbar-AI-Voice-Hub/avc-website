import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'insurance')

export default function Insurance() {
  return <ServicePageLayout config={config} />
}
