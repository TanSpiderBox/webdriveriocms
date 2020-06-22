Feature: BizUI

    Background: As a User I want check all scenario of Biz UI feature

    @BU001
    Scenario: Verify User can not acess guest BizUI
        Given User access Biz UI Successfully
        When User input incorrect passcode
        Then User can not access guest Biz UI

    @BU002
    Scenario: Verify User can acess guest BizUI
        Given User access Biz UI Successfully
        When User input correct passcode
        Then User can access guest Biz UI

    @BU003
    Scenario: Verify User can create Appointment in guest Biz UI
        Given User Access CSM Website
        When User input correct UserName and Password
        Then User can login System Successfully
        When User create new Onsite Appointment
        Given User access Biz UI Successfully
        When User input correct passcode
        Then User can access guest Biz UI
        When User input all valid information
        Then User can create Appointment in guest Biz UI

    @BU004
    Scenario: Verify User can login Biz UI
        Given User access Biz UI Successfully
        When User input correct employee UserName Password
        Then User can login Biz UI Successfully

    # @BU005
    # Scenario: Verify User can view all Appointment incompleted


    # @BU006
    # Scenario: Verify User can create Appointment in Return User


    # @BU007
    # Scenario: Verify User can add Appointment to calendar


    @BU008
    Scenario: Verify User can reschedule
        When User click button re-schedule Appointment
        Then User can change date time and room Appointment Successfully

    @BU009
    Scenario: Verify User can edit questionare
        When User click button edit questionare Appointment
        Then User can change questionare Appointment Successfully

    @BU010
    Scenario: Verify User can delete Appointment
        When User click button delete Appointment
        Then User can delete Appointment Successfully
        Given User Access CSM Website
        When User input correct UserName and Password
        Then User can login System Successfully
        Then User create new Onsite Appointment Successfully

    @BU011
    Scenario: Verify User can not view Appointment do not public time slot
        When User create Onsite Appointment and do not public time slot
        Given User access Biz UI Successfully
        When User input correct employee UserName Password
        Then Employee can not view time slot in BizUI
        Given User Access CSM Website
        When User input correct UserName and Password
        Then User can login System Successfully
        Then User create new Onsite Appointment Successfully

    @ignore
    @BU012
    Scenario: Verify User can not view time slot disable