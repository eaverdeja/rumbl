Code.require_file("support/test_helpers.exs", __DIR__)
ExUnit.start()
Ecto.Adapters.SQL.Sandbox.mode(Rumbl.Repo, :manual)
