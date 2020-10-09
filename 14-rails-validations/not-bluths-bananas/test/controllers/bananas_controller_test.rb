require 'test_helper'

class BananasControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get bananas_index_url
    assert_response :success
  end

end
