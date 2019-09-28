import { FormGroup } from '@angular/forms';

export function ValidDateRange(start: string, end: string) {
  return (formGroup: FormGroup) => {
    const startControl = formGroup.controls[start];
    const endControl = formGroup.controls[end];
    const date = new Date();
    const today = new Date(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );

    const startDate = new Date(startControl.value);
    const endDate = new Date(endControl.value);

    if (
      startControl.errors &&
      endControl.errors &&
      !startControl.errors.forbiddenDate &&
      !endControl.errors.forbiddenDate
    ) {
      return;
    }

    if (today > startDate) {
      startControl.setErrors({ forbiddenDate: true });
    }
    if (today >= endDate) {
      endControl.setErrors({ forbiddenDate: true });
    }
    if (endDate <= startDate) {
      endControl.setErrors({ forbiddenDate: true });
    }
  };
}
