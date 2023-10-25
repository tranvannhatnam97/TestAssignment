Feature: Chatbot 

  Scenario: Chat with chatbox successfully
    Given User go to homepage
    When User click chatbot button
    Then Chatbot show up
    When User click Start
    Then Required infomation form show up
    When User type infomation with name: "namtvn", email: "namtvn97@gmail.com", phone: "0979399732" and click Start
    Then Chatbot start

    When User chat "Tôi muốn đặt phòng ở khách sạn Vinpearl"
    Then User message appear: "Tôi muốn đặt phòng ở khách sạn Vinpearl"
    And Chatbot response message contain: "Tìm phòng khách sạn"

    When User chat "Quy đổi voucher thành tiền mặt được không?"
    Then User message appear: "Quy đổi voucher thành tiền mặt được không?"
    And Chatbot response message contain: "Điểm đến của Quý khách là?"

    When User chat "Đặt phòng qua bên thứ 3 có được giữ phòng không?"
    Then User message appear: "Đặt phòng qua bên thứ 3 có được giữ phòng không?"
    And Chatbot response message contain: "bên thứ 3"

    When User chat "Đặt phòng qua bên thứ 3 thì có vé vui chơi giải trí không?"
    Then User message appear: "Đặt phòng qua bên thứ 3 thì có vé vui chơi giải trí không?"
    And Chatbot response message contain: "giải trí"