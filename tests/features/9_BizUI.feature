Feature: BizUI

    @BU001
    Scenario: User can't acess guest BizUI
        Given User Access CSM Website
        When User input correct username and password
        Then User can login system successful
        When User create new Onsite Appoinment
        Given User access Biz UI successful
        When User input incorrect passcode
        Then User can't access guest Biz UI

    @BU002
    Scenario: User can acess guest BizUI
        When User input correct passcode
        Then User can access guest Biz UI

    @BU003
    Scenario: User can create appointment in guest Biz UI
        When User input all valid information
        Then User can create appointment in guest Biz UI

    @BU004
    Scenario: User can login Biz UI
        When User input correct employee username password
        Then User can login Biz UI successful

    @BU007
    Scenario: User can reschedule
        When User click button re-schedule appointment
        Then User can change date time and room appointment successfull

    @BU008
    Scenario: User can edit questionare
        When User click button edit questionare appointment
        Then User can change questionare appointment successful

    @BU009
    Scenario: User can delete appointment
        When User click button delete appointment
        Then User can delete appointment successfull
        Given User Access CSM Website
        When User input correct username and password
        Then User can login system successful
        Then User create new Onsite Appoinment successful