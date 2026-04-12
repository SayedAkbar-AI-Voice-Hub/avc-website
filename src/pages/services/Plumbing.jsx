import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'plumbing')

export default function Plumbing() {
  return <ServicePageLayout config={config} />
}
