class EntriesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_sidebar_props, only: [:show, :index, :new, :edit, :update, :create, :results]
  before_action :set_entry, only: [:show, :edit, :update, :destroy]
  before_action :set_category_options, only: [:new, :edit, :update, :create]

  def index
  end

  def results
    @results = Entry.search_title_or_body(params["search_query"])
    @search_query = params["search_query"]
  end


  def show
    @link = ExternalLink.new
  end

  def new
    @entry = Entry.new
  end

  def edit
  end

  def create
    @entry = Entry.new(entry_params)
    @entry[:last_editor] = current_user.name
    if @entry.save
      redirect_to @entry, notice: 'Entry successfully created.'
    else
      render :new
    end
  end

  def update
    @entry.update(entry_params)
    @entry[:last_editor] = current_user.name
    if @entry.save
      redirect_to @entry, notice: 'Entry successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @entry.discard
    redirect_to entries_path
  end

  private

  def set_sidebar_props
    @collections = Collection.includes(:categories, :entries).as_json(include: {
      categories: {
        include: :entries
      }
    })
  end

  def set_entry
    @entry = Entry.find_by( slug: params[:slug])
  end

  def set_category_options
    @category_options = Category.all.map{|c| [ c.name, c.id ] }
  end

  def entry_params
    params.require(:entry).permit(:title, :body, :category_id)
  end

end
