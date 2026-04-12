import ServicePageLayout from '../../components/ServicePageLayout'
import { services } from '../../data/services'

const config = services.find(s => s.slug === 'auto-dealerships')

export default function AutoDealerships() {
  return <ServicePageLayout config={config} />
}
