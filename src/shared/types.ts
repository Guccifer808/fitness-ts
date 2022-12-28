//defining pages via enums

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurPlans = "ourplans",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

// optional description with ?
export interface PlanType {
  name: string;
  description?: string;
  image: string;
}