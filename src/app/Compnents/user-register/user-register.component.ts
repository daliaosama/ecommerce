import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userFormGroup: FormGroup;
  constructor(private formbuilder: FormBuilder) { 
    // this.userFormGroup =new FormGroup(
    //   {
    //     fullName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    //     email:new FormControl('',[Validators.required,Validators.pattern(/^[a-z]{4,10}(@)[a-z 0-9]{3,10}(.com)$/i)]),
    //     mobileNo:new FormControl('',[Validators.required,Validators.pattern(/^(010|011|012)[0-9]{8}$/)]),
    //     Password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    //     Repassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
    //     address:new FormGroup({
    //       city:new FormControl('',[Validators.required]),
    //       street:new FormControl('',[Validators.required]),
    //       postalCode:new FormControl('',[Validators.required])
    //     })
    //   }
    // );
    this.userFormGroup = this.formbuilder.group({
      fullName:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.pattern(/^[a-z]{4,10}(@)[a-z 0-9]{3,10}(.com)$/i)]],
      mobileNo:formbuilder.array([formbuilder.control('',[Validators.required,Validators.pattern(/^(010|011|012)[0-9]{8}$/)])]),
      address:this.formbuilder.group({
        city:['',[Validators.required]],
        street:['',[Validators.required]],
        postalCode:['',[Validators.required]],
      }

      ),
      Password:['',[Validators.required,Validators.minLength(6)]],
      Repassword:['',[Validators.required,Validators.minLength(6)]]
    })
  }
get fullName()
{
  return this.userFormGroup.get('fullName');
}
get email()
  {
    return this.userFormGroup.get('email')
  }
  
get Password()
{
  return this.userFormGroup.get('Password'); 
}
get Repassword()
{
  return this.userFormGroup.get('Repassword')
}
get mobileNo(){
  return this.userFormGroup.get('mobileNo') as FormArray;
}
addMobileNo(){
  this.mobileNo.push(this.formbuilder.control('',[Validators.required,Validators.pattern(/^(010|011|012)[0-9]{8}$/)]));
}
  ngOnInit(): void {
  }

}
