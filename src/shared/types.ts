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