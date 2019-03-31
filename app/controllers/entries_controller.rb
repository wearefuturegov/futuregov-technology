class EntriesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_categories, only: [:show, :index, :new]

  def index
    @entries = Entry.all
  end

  def show
    @entry = Entry.find(params[:id])
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

  def set_categories
    @categories = Category.all
  end

  def entry_params
    params.require(:entry).permit(:title, :body, :category_id)
  end

end
