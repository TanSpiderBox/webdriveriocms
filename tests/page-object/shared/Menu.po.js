const MenuObject = {
  medicalType: "//a[contains(@class, 'menu__link') and .//*[contains(text(), 'Medical Types')]]",
  employer: "//a[contains(@class, 'menu__link') and .//*[contains(text(), 'Employers')]]",
  calendar: "//a[contains(@class, 'menu__link') and .//*[contains(text(), 'Calendar')]]",
  supervisor: "//a[contains(@class, 'menu__link') and .//*[contains(text(), 'Supervisors')]]",
  staff: "//a[contains(@class, 'menu__link') and .//*[contains(text(), 'Staff')]]",
  location: "//a[contains(@class, 'menu__link') and .//*[contains(text(), 'Locations')]]",
}

export { MenuObject }
