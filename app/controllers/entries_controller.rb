class EntriesController < ApplicationController
  before_action :authenticate_user!

  def index
    @entries = Entry.all
  end

  def new
    @entry = Entry.new
    @categories = Category.all.map{|c| [ c.name, c.id ] }
  end

  def create
    @entry = Entry.new(entry_params)
    if @entry.save
      redirect_to @entry, notice: 'Entry successfully created.'
    else
      redirect_to @entry, notice: 'There was a problem.'
    end
  end

  private

  def entry_params
    params.require(:entry).permit(:title, :body)
  end

end
