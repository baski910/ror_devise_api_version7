require "test_helper"

class ReferralsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get referrals_create_url
    assert_response :success
  end

  test "should get show" do
    get referrals_show_url
    assert_response :success
  end
end
