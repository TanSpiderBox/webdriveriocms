Feature: BizUI

    Background: As a User I want check all scenario of Biz UI feature

    @BU001
    Scenario: User can not acess guest BizUI
        Given User Access CSM Website
        When User input correct UserName and Password
        Then User can login system Successfully
        When User create new Onsite Appoinment
        Given User access Biz UI Successfully
        When User input incorrect passcode
        Then User can not access guest Biz UI

    @BU002
    Scenario: User can acess guest BizUI
        When User input correct passcode
        Then User can access guest Biz UI

    @BU003
    Scenario: User can create Appointment in guest Biz UI
        When User input all valid information
        Then User can create Appointment in guest Biz UI

    @BU004
    Scenario: User can login Biz UI
        When User input correct employee UserName Password
        Then User can login Biz UI Successfully

    @BU005
    Scenario: User can view all Appointment incompleted

    @BU006
    Scenario: User can create Appointment in Return User

    @BU007
    Scenario: User can add Appointment to calendar

    @BU008
    Scenario: User can reschedule
        When User click button re-schedule Appointment
        Then User can change date time and room Appointment Successfully

    @BU009
    Scenario: User can edit questionare
        When User click button edit questionare Appointment
        Then User can change questionare Appointment Successfully

    @BU010
    Scenario: User can delete Appointment
        When User click button delete Appointment
        Then User can delete Appointment Successfully
        Given User Access CSM Website
        When User input correct UserName and Password
        Then User can login system Successfully
        Then User create new Onsite Appoinment Successfully

    @BU011
    Scenario: User can not view Appointment don't public time slot

    @BU012
    Scenario: User can not view time slot disable